<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BreezeLink from "@/Components/AnchorLink.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/InputLabel.vue";
import BreezeInputError from "@/Components/InputError.vue";
import BreezeButton from "@/Components/PrimaryButton.vue";
import BreezeResetButton from "@/Components/ResetButton.vue"
import BreezeHeading from "@/Components/Heading.vue"

import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
// import { useForm } from '@inertiajs/inertia-vue3'
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    department: {
        type: Object
    },
})

const form = useForm({
      name: props.department.name,
      email: props.department.email,
      phone: props.department.phone,
    })

function submit() {
  form.put(route('departments.update', props.department.id));
  console.log(props.department.id)
}

// function resetForm() {
//   form.clearErrors();
//   form.reset();
// }
</script>

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <breeze-heading>Edit Department - {{form.name}}</breeze-heading>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">

            <div v-show="form.hasErrors">
              <div class="text-red-600 font-medium">Invalid input</div>
            </div>

            <form @submit.prevent="submit">
              <div class="mt-4">
                <breeze-label for="name" value="Name"></breeze-label>
                <breeze-input
                  id="name"
                  class="mt-1 block w-1/2"
                  autofocus
                  required
                  v-model="form.name"
                />
                <!-- <breeze-input-error v-if="form.errors.name" :message="form.errors.name"></breeze-input-error> -->
              </div>
              <div class="mt-4">
                <breeze-label for="email" value="Email"></breeze-label>
                <breeze-input
                  id="email"
                  class="mt-1 block w-1/2"
                  autofocus
                  required
                  v-model="form.email"
                />
                <!-- <breeze-input-error :message="form.errors"></breeze-input-error> -->
              </div>
              <div class="mt-4">
                <breeze-label for="phone" value="Phone"></breeze-label>
                <breeze-input
                  id="phone"
                  class="mt-1 block w-1/2"
                  autofocus
                  required
                  v-model="form.phone"
                />
                <!-- <breeze-input-error :message="form.errors"></breeze-input-error> -->
              </div>
              <!-- submit -->
              <div class="flex items-center justify-end mt-4">
                <breeze-reset-button>reset</breeze-reset-button>
                <breeze-button 
                :loading="form.processing" 
                :class="{'opacity-25' : form.processing}"
                type="submit"
                  >Submit</breeze-button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
