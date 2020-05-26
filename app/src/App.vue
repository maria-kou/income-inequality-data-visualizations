<template>
    <div id="app">
        <Nav></Nav>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import Nav from './components/Nav'

    export default {
        components: {
            Nav
        }
    }
</script>
