<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BreezeLink from "@/Components/AnchorLink.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/InputLabel.vue";
import BreezeInputError from "@/Components/InputError.vue";
import BreezeButton from "@/Components/PrimaryButton.vue";

import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
// import { useForm } from '@inertiajs/inertia-vue3'

const form = reactive({
  name: null,
  email: null,
  phone: null,
});

function submit(el) {
  Inertia.post(route('departments.store'), form);
  console.log(route('departments.store'), form)
}
</script>

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Create New Department
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <div v-show="form.hasErrors">
              <!-- <div class="text-red-600 font-medium">Invalid input</div> -->
            </div>
            <form @submit.prevent="submit">
              <div class="mt-4">
                <breeze-label for="name" value="Name"></breeze-label>
                <breeze-input
                  id="name"
                  class="mt-1 block w-1/2"
                  required
                  autofocus
                  v-model="form.name"
                />
                <!-- <breeze-input-error :message="form.errors"></breeze-input-error> -->
              </div>
              <div class="mt-4">
                <breeze-label for="email" value="Email"></breeze-label>
                <breeze-input
                  id="email"
                  class="mt-1 block w-1/2"
                  required
                  autofocus
                  v-model="form.email"
                />
                <!-- <breeze-input-error :message="form.errors"></breeze-input-error> -->
              </div>
              <div class="mt-4">
                <breeze-label for="phone" value="Phone"></breeze-label>
                <breeze-input
                  id="phone"
                  class="mt-1 block w-1/2"
                  required
                  autofocus
                  v-model="form.phone"
                />
                <!-- <breeze-input-error :message="form.errors"></breeze-input-error> -->
              </div>
              <!-- submit -->
              <div class="flex items-center justify-end mt-4">
                <breeze-button :loading="form.processing" type="submit"
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
