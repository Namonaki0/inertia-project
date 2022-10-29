<template>
  <AuthenticatedLayout>
    <template #header>
      <breeze-heading>Edit Employee - {{ form.name }}</breeze-heading>
    </template>

    <div v-show="form.hasErrors">
      <div class="text-red-600 font-medium">
        Please make the following corrections:
      </div>
    </div>
    <form @submit.prevent="submit">
      <div>
        <breeze-label for="name" value="Name"></breeze-label>
        <breeze-input
          type="text"
          id="name"
          class="mt-1 block w-1/2"
          v-model="form.name"
          required
          autofocus
          :error="form.errors.name"
        ></breeze-input>
        <breeze-input-error :message="form.errors.name"></breeze-input-error>
      </div>
      <div class="mt-4">
        <breeze-label for="email" value="Email"></breeze-label>
        <breeze-input
          type="email"
          id="email"
          class="mt-1 block w-1/2"
          v-model="form.email"
          :error="form.errors.email"
        ></breeze-input>
        <breeze-input-error :message="form.errors.email"></breeze-input-error>
      </div>
      <div class="mt-4">
        <breeze-label for="department_id" value="Department"></breeze-label>
        <breeze-select
          id="department_id"
          class="mt-1 block w-1/2"
          v-model="form.department_id"
          :error="form.errors.department_id"
          :options="departments"
        ></breeze-select>
        <breeze-input-error
          :message="form.errors.department_id"
        ></breeze-input-error>
      </div>

      <!-- submit -->
      <div class="flex items-center justify-end mt-4">
        <breeze-reset-button @click="resetForm">Reset</breeze-reset-button>
        <breeze-button :loading="form.processing">Update</breeze-button>
      </div>
    </form>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BreezeLink from "@/Components/AnchorLink.vue";
import BreezeLabel from "@/Components/InputLabel.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeInputError from "@/Components/InputError.vue";
import BreezeButton from "@/Components/PrimaryButton.vue";
import BreezeResetButton from "@/Components/ResetButton.vue";
import BreezeHeading from "@/Components/Heading.vue";
import BreezeSelect from "@/Components/Select.vue";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  components: {
    AuthenticatedLayout,
    BreezeLink,
    BreezeLabel,
    BreezeInput,
    BreezeButton,
    BreezeResetButton,
    BreezeInputError,
    BreezeHeading,
    BreezeSelect,
  },
  setup(props) {
    const form = useForm({
      name: props.employee.name,
      email: props.employee.email,
      department_id: props.employee.department_id,
    });

    return { form };
  },
  props: {
    employee: Object,
    departments: Object,
  },
  methods: {
    submit() {
      this.form.put(route("employees.update", this.employee.id));
    },
    resetForm() {
      this.form.clearErrors();
      this.form.reset();
    },
  },
};
</script>
