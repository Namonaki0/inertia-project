<template>
  <AuthenticatedLayout>
    <template #header>
      <breeze-heading>Employees</breeze-heading>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <div class="flex items-center justify-end mb-6">
              <breeze-link :href="route('employees.create')"
                >New Employee
              </breeze-link>
            </div>

            <breeze-table>
              <template #header>
                <breeze-tc>ID</breeze-tc>
                <breeze-tc>Name</breeze-tc>
                <breeze-tc>Department</breeze-tc>
                <breeze-tc>Email</breeze-tc>
                <breeze-tc>Actions</breeze-tc>
              </template>
              <tr
                v-for="e in $page.props.employees.data"
                :key="e.id"
                class="hover:bg-gray-200"
              >
                <breeze-tc>{{ e.id }}</breeze-tc>
                <breeze-tc>{{ e.name }}</breeze-tc>
                <breeze-tc>{{ e.department }}</breeze-tc>
                <breeze-tc>{{ e.email }}</breeze-tc>
                <breeze-tc>
                  <breeze-link mode="edit" :href="route('employees.edit', e.id)"
                    >Edit</breeze-link
                  >
                  <breeze-link mode="delete" @click="destroy(e.id)"
                    >Delete</breeze-link
                  >
                </breeze-tc>
              </tr>
            </breeze-table>

            <breeze-pagination :links="$page.props.employees.links" />
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BreezeTc from "@/Components/TableColumn.vue";
import BreezeTable from "@/Components/Table.vue";
import BreezePagination from "@/Components/Pagination.vue";
import BreezeLink from "@/Components/AnchorLink.vue";
import BreezeHeading from "@/Components/Heading.vue";
import { Inertia } from "@inertiajs/inertia";

export default {
  components: {
    AuthenticatedLayout,
    BreezeTc,
    BreezeTable,
    BreezePagination,
    BreezeLink,
    BreezeHeading,
  },

  props: {
    employees: Object,
  },
  methods: {
    destroy(id) {
      Inertia.delete(route("employees.destroy", id));
    },
  },
};
</script>
