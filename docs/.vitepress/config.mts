import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Promptulate",
  description: "🚀Lightweight Large language model automation and Autonomous Language Agents development framework. Build your LLM Agent Application in a pythonic way!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/get_started/intro' },
      { text: 'Use cases', link: '/use_cases/intro' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Introduction', link: '/get_started/intro' },
          { text: 'Quick Start', link: '/get_started/quick_start' },
          { text: 'How-to Guide', link: '/get_started/how-to-guide' }
        ]
      },
      {
        text: 'Use Cases',
        items: [
          { text: 'Best practices', link: '/use_cases/intro' },
          { text: 'Awesome chat function', link: '/use_cases/chat_usage' },
          { text: 'Build streamlit chatbot by pne', link: '/use_cases/streamlit-chatbot' },
          { text: 'Build gradio chatbot by pne', link: '/use_cases/gradio-chatbot' },
          { text: 'Build math application with agent', link: '/use_cases/build-math-application-with-agent' },
          { text: 'Groq, llama3, Streamlit to build a application', link: '/use_cases/streamlit-groq-llama3' },
          { text: 'Build knowledge map with streamlit and pne.chat()', link: '/use_cases/llmapper' },
          { text: 'Build a chatbot using pne+streamlit to chat with GitHub repo', link: '/use_cases/chat-to-github-repo' }
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'Agent', link: '/modules/agent' },
          { text: 'LLMs', link: '/modules/llm/llm' },
          { text: 'Tool', link: '/modules/tools/index' },
          { text: 'Format Output', link: '/modules/formatter' },
          { text: 'Hook & Lifecycle', link: '/modules/hook' },
          { text: 'Memory', link: '/modules/memory' },
          { text: 'Provider', link: '/modules/provider' },
          { text: 'Client', link: '/modules/client' },
          { text: 'String Template', link: '/modules/other/string_template' },
          { text: 'Schema', link: '/modules/schema' },
          // { text: 'Framework', link: '/modules/framework' },
          // { text: 'Preset', link: '/modules/preset' }
        ]
      },
      {
        text: 'Other',
        items: [
          { text: 'FAQ', link: '/other/faq' },
          { text: 'Release Version', link: '/other/update' },
          { text: 'Roadmap', link: '/other/plan' },
          { text: 'Developer guidance', link: '/other/contribution' },
          { text: 'Log system', link: '/other/log_system' },
          { text: 'How to write model name?', link: '/other/how_to_write_model_name' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/undertone0809/promptulate' },
      { icon: 'twitter', link: 'https://x.com/kfhedRk3lXofRIB' }
    ]
  }
})