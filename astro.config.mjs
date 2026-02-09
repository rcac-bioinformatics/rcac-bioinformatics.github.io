import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';
import starlight from '@astrojs/starlight';

const googleAnalyticsId = 'G-FPWQ35ME85';
const siteDomain = 'rcac-bioinformatics.github.io';

export default defineConfig({
    site: `https://${siteDomain}`,
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
            favicon: '/favicon-96x96.png', // relative to public/
            // Single head array: Plausible + Google Analytics
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://plausible.io/js/script.js',
                        defer: true,
                        'data-domain': siteDomain, // fixed: was 'docs.atuin.sh'
                    },
                },
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
                    href: 'https://github.com/rcac-bioinformatics/rcac-bioinformatics.github.io',
                },
                {
                    icon: 'discord',
                    label: 'Discord',
                    href: 'https://discord.gg/zEF2nzhXdC',
                },
                {
                    icon: 'blueSky',
                    label: 'BlueSky',
                    href: 'https://bsky.app/profile/rcac-bioinfo.bsky.social',
                },
            ],
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
            },
            sidebar: [
                {
                    label: 'Guide',
                    items: [
                        { label: 'Installing R packages', link: '/guide/r-packages' },
                        { label: 'Installing Perl packages', link: '/guide/perllib' },
                        { label: 'Transfer data with iRODS', link: '/guide/icommands' },
                        { label: 'Optimizing Trinity', link: '/guide/trinity' },
                        { label: 'VISPR visualization', link: '/guide/vispr' },
                        { label: 'Nextflow installation', link: '/guide/nextflow' },
                        { label: 'VS Code setup', link: '/guide/vscode' },
                        { label: 'Productivity tips', link: '/guide/productivity-tips' },
                        { label: 'Download SRA data', link: '/guide/sra-download' },
                        { label: 'Conda/Mamba environments', link: '/guide/conda' },
                        { label: 'SLURM job arrays', link: '/guide/job-arrays' },
                        { label: 'QC and trimming', link: '/guide/fastqc' },
                        { label: 'Apptainer containers', link: '/guide/apptainer' },
                        { label: 'Project organization', link: '/guide/project-organization' },
                    ],
                },
                {
                    label: 'Tutorials',
                    items: [
                        { label: 'Juicer on Negishi cluster', link: '/tutorials/juicer' },
                        { label: 'Assemble mitochondrial genomes', link: '/tutorials/mitohifi' },
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
                                { label: 'Hi-C scaffolding (YaHS)', link: '/tutorials/scaffolding' },
                            ],
                        },
                        {
                            label: 'Genome annotation',
                            items: [
                                { label: 'Repeat masking', link: '/tutorials/repeat-masking' },
                                { label: 'Annotation assessment', link: '/tutorials/annotation-qc' },
                            ],
                        },
                        {
                            label: 'RNA-Seq analysis',
                            items: [
                                { label: 'Differential expression', link: '/tutorials/rnaseq-de' },
                                { label: 'Long-read RNA-Seq', link: '/tutorials/long-read-rnaseq' },
                            ],
                        },
                        { label: 'Variant calling (GATK)', link: '/tutorials/variant-calling' },
                        {
                            label: 'Comparative genomics',
                            items: [
                                { label: 'Synteny (SyRI)', link: '/tutorials/synteny' },
                                { label: 'Phylogenomics (OrthoFinder)', link: '/tutorials/orthofinder' },
                            ],
                        },
                        {
                            label: 'Metagenomics',
                            items: [
                                { label: '16S amplicon (QIIME 2)', link: '/tutorials/qiime2' },
                            ],
                        },
                        {
                            label: 'Single-cell analysis',
                            items: [
                                { label: 'scRNA-seq (Cell Ranger + Seurat)', link: '/tutorials/single-cell' },
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