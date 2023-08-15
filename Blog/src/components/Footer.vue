<template>
    <footer class="footer">
        <p>&copy; 2023 BigFox Blog</p>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 10px;
    font-size: 1em;
    color: #888;
    background-color: #f2f2f2;
    width: 100%;
}

@media (max-width: 768px) {
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        padding: 10px;
        font-size: 0.9em;
        color: #888;
        background-color: #f2f2f2;
        width: 100%;
    }
}
</style>