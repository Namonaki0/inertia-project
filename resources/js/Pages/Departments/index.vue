<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import BreezeTc from "@/Components/TableColumn.vue";
import BreezeTable from "@/Components/Table.vue";
import BreezePagination from "@/Components/Pagination.vue"
import BreezeLink from "@/Components/AnchorLink.vue"
import BreezeHeading from "@/Components/Heading.vue"
import { Inertia } from "@inertiajs/inertia";

function destroy(id) {
  Inertia.delete(route('departments.destroy', id))
}

</script>

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #header>
      <breeze-heading>Departments</breeze-heading>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <!-- {{$page.props.departments}} -->
            
            <div class="flex items-center justify-end mb-6">
              <breeze-link :href="route('departments.create')">Create Department</breeze-link>

            </div>
            <breeze-table>
              <template #header>
                <breeze-tc class="border px-4 py-2">ID</breeze-tc>
                <breeze-tc class="border px-4 py-2">Name</breeze-tc>
                <breeze-tc class="border px-4 py-2">Email</breeze-tc>
                <breeze-tc class="border px-4 py-2">Phone</breeze-tc>
                <breeze-tc class="border px-4 py-2">Actions</breeze-tc>
              </template>
              <tr
                v-for="d in $page.props.departments.data"
                :key="d.id"
                class="hover:bg-gray-200"
              >
                <breeze-tc class="border px-4 py-2">{{ d.id }}</breeze-tc>
                <breeze-tc class="border px-4 py-2">{{ d.name }}</breeze-tc>
                <breeze-tc class="border px-4 py-2">{{ d.email }}</breeze-tc>
                <breeze-tc class="border px-4 py-2">{{ d.phone }}</breeze-tc>
                <breeze-tc class="border px-4 py-2">
      
                  <breeze-link mode="edit" :href="route('departments.edit', d.id)">Edit</breeze-link>
                  <breeze-link mode="delete" @click="destroy(d.id)">Edit</breeze-link>
                </breeze-tc>
              </tr>
            </breeze-table>

            <breeze-pagination :links="$page.props.departments.links"></breeze-pagination>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
