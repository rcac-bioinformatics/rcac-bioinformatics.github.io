import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';
import starlight from '@astrojs/starlight';
const googleAnalyticsId = 'G-FPWQ35ME85';

export default defineConfig({
    site: "https://rcac-bioinformatics.github.io",
    integrations: [
        starlight({
            expressiveCode: {
                themes: ['dracula', 'light-plus'],
              },
            plugins: [
                starlightLinksValidator(),
            ],
            title: 'RCAC bioinformatics',
            editLink: {
                baseUrl: 'https://github.com/rcac-bioinformatics/rcac-bioinformatics.github.io/edit/main/',
              },
            customCss: [
                './src/styles/custom.css',
            ],
            favicon: './src/assets/favicon-96x96.png',
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://plausible.io/js/script.js',
                        defer: true,
                        'data-domain': 'docs.atuin.sh',
                    }
                }
            ],
            head: [
                // Adding google analytics
                {
                    tag: 'script',
                    attrs: {
                        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
                    },
                },
                {
                    tag: 'script',
                    content: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${googleAnalyticsId}');
                  `,
                },
              ],
            logo: {
                light: './src/assets/logo-light.png',
                dark: './src/assets/logo-dark.png',
                replacesTitle: true,
            },
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/aseetharam/rcac-bioinformatics'
                },
                {
                    icon: 'discord',
                    label: 'Discord',
                    href: 'https://discord.gg/zEF2nzhXdC'
                },
                {
                    icon: 'blueSky',
                    label: 'BlueSky',
                    href: 'https://bsky.app/profile/rcac-bioinfo.bsky.social'
                },
            ],
            defaultLocale: "root",
            locales: {
                root: { label: "English", lang: "en" }
            },
            
            sidebar: [
                {
                    label: 'Guide',
                    items: [
                        { label: 'Installing R packages', link: '/guide/r-packages' },
                        { label: 'Installing Perl packages', link: '/guide/perllib' },
                        { label: 'Transfer data with iRODS', link: 'guide/icommands' },
                        { label: 'Optimizing Trinity', link: '/guide/trinity' },
                        { label: 'VISPR visualization', link: '/guide/vispr' },
                        { label: 'Nextflow installation', link: '/guide/nextflow' },
                        { label: 'VS Code setup', link: '/guide/vscode' },
                        { label: 'Productivity tips', link: '/guide/productivity-tips' },
                    ],
                },
                {
                    label: 'Tutorials',
                    items: [

                        { label: 'Juicer on Negishi cluster', link: '/tutorials/juicer' },
                        { label: 'Assemble mitochondrial genomes ', link: '/tutorials/mitohifi' },
                        {
                            label: 'Gene prediction',
                            items: [
                                { label: 'BRAKER3', link: '/tutorials/braker' },
                                { label: 'GeMoMa - merge annotations', link: '/tutorials/gemoma' },
                                { label: 'Helixer', link: '/tutorials/helixer' },
                            ],
                        },
                        {
                            label: 'Genome assembly',
                            items: [
                                { label: 'HiFiasm', link: '/tutorials/hifi_assembly' },
                            ],
                        },
                    ],
                },
                { label: 'Known issues', link: '/known-issues' },
                { label: 'Integrations', link: '/integrations' },
                { label: 'FAQ', link: '/faq' },
            ],
        }),
    ],
});
