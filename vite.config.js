import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig ({
    base: "/coders-app/",
    plugins: [react()],
})