import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import beautify from 'vite-plugin-beautify'
import postcssMergeLonghand from 'posthtml-postcss-merge-longhand'
import posthtmlComponent from 'posthtml-component'

export default {
    build: {
        rollupOptions: {
            input: [
                './src/templates/**/*.html',
            ],
        },
        fail: 'silent' // or 'verbose'
    },
    plugins: [
        vituum({
            pages: {
                dir: './src/templates'
            }
        }),
        posthtml({
            root: './src',
            include: '**/*.html',
            plugins: [
                posthtmlComponent({
                    root: './src',
                    folders: ['components', 'layouts', 'templates'],
                    tagPrefix: 'mb-'
                }),
                postcssMergeLonghand()
            ],
        }),
        juice({
            paths: ['src/templates'],
            doctype: '<!DOCTYPE html>',
            options: {
                preserveImportant: true, // false
            }
        }),
        tailwindcss(),
        beautify({
            inDir: 'dist',
            html: {
                enabled: true,
                options: {
                    indent_size: 4,
                    end_with_newline: false,
                    max_preserve_newlines: 0,
                    css: {
                        indent_size: 4,
                        preserve_newlines: false,
                        newline_between_rules: false,
                        selector_separator_newline: false,
                        end_with_newline: false,
                    }
                },
            },
            js: {
                enabled: false,
            },
            css: {
                enabled: false,
            },
        }),
        htmlwatch(),
    ],
}

// Watch .html files
function htmlwatch() {
    return {
        name: 'htmlwatch',
        enforce: 'post',
        // HMR
        handleHotUpdate({ file, server }) {
            if (file.endsWith('.html')) {
                console.log('reloading html file...');
                // To restart
                server.restart()
                // To reload
                /* server.ws.send({
                 *   type: 'full-reload',
                 *   path: '*'
                 * }); */
            }
        },
    }
}