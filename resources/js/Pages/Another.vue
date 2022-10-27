<template>
    <p>{{$page.props.appName}}</p>
    <div>
        This is another page
    </div>
    <Link :href="route('home')">Home page</Link>
</template>


<script>
    import { Link } from '@inertiajs/inertia-vue3'

export default {

    components: {
        Link
    }

}


</script>