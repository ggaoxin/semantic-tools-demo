// 语义计算工具库数据
const toolsData = [
    {
        id: 'move-recognition',
        name: '语步识别工具',
        description: '该工具用于识别科技文本中的结构性语步，能够识别摘要或项目文本中的背景、目标、方法、结果、价值等结构信息。',
        features: ['中文摘要语步识别', '英文摘要语步识别', '中文基金项目语步识别'],
        useCases: ['学术摘要分析', '基金文本解析', '论文结构化处理'],
        endpoint: '/api/v1/move-recognition',
        params: [
            { name: 'text', type: 'string', required: true, desc: '待识别的文本内容' },
            { name: 'language', type: 'string', required: false, desc: '语言类型：zh/en，默认为 zh' },
            { name: 'type', type: 'string', required: false, desc: '文本类型：abstract/grant，默认为 abstract' }
        ]
    },
    {
        id: 'auto-classification',
        name: '自动分类工具',
        description: '该工具用于科技文献的自动分类，结合分词、术语识别、语法解析和语义匹配等方法，实现对不同类型科技文献的主题或学科归类。',
        features: ['中文科技文献分类', '英文科技文献分类', '专业领域科技文献分类'],
        useCases: ['期刊论文分类', '会议论文归档', '科技报告整理', '专业领域文献筛选'],
        endpoint: '/api/v1/auto-classification',
        params: [
            { name: 'text', type: 'string', required: true, desc: '待分类的文本内容' },
            { name: 'title', type: 'string', required: false, desc: '文本标题，辅助分类' },
            { name: 'language', type: 'string', required: false, desc: '语言类型：zh/en，默认为 zh' },
            { name: 'domain', type: 'string', required: false, desc: '专业领域，如 medicine/physics/chemistry' }
        ]
    },
    {
        id: 'keyword-recognition',
        name: '关键词识别工具',
        description: '该工具主要做关键词抽取，包括中英文科技文献关键词识别以及研究问题识别，抽取表达核心议题的句子和关键短语。',
        features: ['中文科技文献关键词识别', '英文科技文献关键词识别', '研究问题识别'],
        useCases: ['主题词抽取', '文献核心议题定位', '研究问题挖掘'],
        endpoint: '/api/v1/keyword-recognition',
        params: [
            { name: 'text', type: 'string', required: true, desc: '待分析的文本内容' },
            { name: 'type', type: 'string', required: false, desc: '识别类型：keyword/research-question，默认为 keyword' },
            { name: 'top_k', type: 'integer', required: false, desc: '返回的关键词数量，默认为 10' },
            { name: 'language', type: 'string', required: false, desc: '语言类型：zh/en，默认为 zh' }
        ]
    },
    {
        id: 'citation-recognition',
        name: '引用句识别工具',
        description: '该工具围绕文献引用展开，包含引用情感识别和引用意图识别，分析引用态度和动机，如背景介绍、方法引入、结果比较等。',
        features: ['引用情感识别', '引用意图识别'],
        useCases: ['引文分析', '学术评价', '知识贡献定位'],
        endpoint: '/api/v1/citation-recognition',
        params: [
            { name: 'citation_text', type: 'string', required: true, desc: '引用句文本' },
            { name: 'mode', type: 'string', required: false, desc: '识别模式：sentiment/intent/both，默认为 both' }
        ]
    },
    {
        id: 'definition-recognition',
        name: '概念定义句识别工具',
        description: '该工具从科技文献全文片段中自动识别"定义某个概念"的句子，并提取被定义的概念对象。',
        features: ['定义句识别', '概念对象提取'],
        useCases: ['术语知识抽取', '概念库构建', '学科知识梳理'],
        endpoint: '/api/v1/definition-recognition',
        params: [
            { name: 'text', type: 'string', required: true, desc: '待分析的文本内容' },
            { name: 'language', type: 'string', required: false, desc: '语言类型：zh/en，默认为 zh' }
        ]
    },
    {
        id: 'ner-recognition',
        name: '命名实体识别工具',
        description: '该工具可识别人名、地名、机构、事件，也能识别科研方法、数据资料、仪器设备、理论原理，以及医学、化工、物理等领域的专业实体。',
        features: ['中英文通用领域命名实体识别', '中英文通用科研实体识别', '专业领域科研实体识别'],
        useCases: ['实体信息抽取', '科研资源识别', '专业术语标注'],
        endpoint: '/api/v1/ner-recognition',
        params: [
            { name: 'text', type: 'string', required: true, desc: '待识别的文本内容' },
            { name: 'type', type: 'string', required: false, desc: '实体类型：general/research/domain，默认为 general' },
            { name: 'language', type: 'string', required: false, desc: '语言类型：zh/en，默认为 zh' },
            { name: 'domain', type: 'string', required: false, desc: '专业领域，如 medicine/chemistry/physics' }
        ]
    },
    {
        id: 'relation-recognition',
        name: '实体关系识别工具',
        description: '该功能在实体识别基础上进一步抽取实体间关系，包括开放关系抽取、句法依存分析、实体对语义配对、知识网络构建等能力。',
        features: ['开放关系抽取', '句法依存分析', '实体对语义配对', '知识网络构建'],
        useCases: ['知识图谱构建', '关系挖掘', '复杂语义建模'],
        endpoint: '/api/v1/relation-recognition',
        params: [
            { name: 'text', type: 'string', required: true, desc: '待分析的文本内容' },
            { name: 'entities', type: 'array', required: false, desc: '已识别的实体列表，可选' },
            { name: 'mode', type: 'string', required: false, desc: '抽取模式：open/dependency/pairing，默认为 open' }
        ]
    },
    {
        id: 'deep-clustering',
        name: '深度聚类工具',
        description: '该工具针对多篇科技文献文本进行句子级语义分析和相似度计算，把文献自动聚合为若干类簇，实现内容归类和知识结构化。',
        features: ['句子级语义分析', '相似度计算', '自动聚合聚类'],
        useCases: ['文献分组', '主题发现', '批量语料整理'],
        endpoint: '/api/v1/deep-clustering',
        params: [
            { name: 'documents', type: 'array', required: true, desc: '待聚类的文档列表，每个文档包含 id 和 text' },
            { name: 'n_clusters', type: 'integer', required: false, desc: '聚类数量，默认为自动确定' },
            { name: 'method', type: 'string', required: false, desc: '聚类算法：kmeans/hierarchical/dbscan，默认为 kmeans' }
        ]
    },
    {
        id: 'clustering-label',
        name: '聚类标签生成工具',
        description: '该工具建立在深度聚类结果之上，自动为每个类簇生成概括性标签，用来直观展示该类簇的主题。',
        features: ['标签自动生成', '主题概括', '多标签支持'],
        useCases: ['聚类结果标注', '主题可视化', '快速理解聚类内容'],
        endpoint: '/api/v1/clustering-label',
        params: [
            { name: 'clusters', type: 'object', required: true, desc: '聚类结果，包含 cluster_id 和 documents 列表' },
            { name: 'num_labels', type: 'integer', required: false, desc: '每个簇生成的标签数量，默认为 3' }
        ]
    },
    {
        id: 'auto-review',
        name: '结构化自动综述工具',
        description: '该工具对文献检索结果集或指定文献集进行自动综述，按照"研究问题—研究方法—研究进展"的三层树形结构组织内容。',
        features: ['研究问题提取', '研究方法归纳', '研究进展梳理', '树形结构组织'],
        useCases: ['综述辅助', '研究现状梳理', '领域画像', '知识脉络构建'],
        endpoint: '/api/v1/auto-review',
        params: [
            { name: 'documents', type: 'array', required: true, desc: '待综述的文档列表' },
            { name: 'structure', type: 'string', required: false, desc: '综述结构：simple/detailed，默认为 detailed' },
            { name: 'max_sections', type: 'integer', required: false, desc: '最大章节数量，默认为 20' }
        ]
    }
];

// 当前状态
let currentTool = toolsData[0];
let currentLang = 'python';

// 初始化
function init() {
    renderSidebar();
    selectTool(toolsData[0].id);
    bindEvents();
}

// 渲染侧边栏
function renderSidebar() {
    const nav = document.getElementById('toolNav');
    nav.innerHTML = toolsData.map(tool => `
        <a class="tool-item" data-id="${tool.id}">
            <svg class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L2 5V11C2 15.36 5.64 18.57 10 19C14.36 18.57 18 15.36 18 11V5L10 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${tool.name}
        </a>
    `).join('');
}

// 选择工具
function selectTool(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) return;

    currentTool = tool;

    // 更新侧边栏激活状态
    document.querySelectorAll('.tool-item').forEach(item => {
        item.classList.toggle('active', item.dataset.id === toolId);
    });

    // 更新面包屑
    document.getElementById('currentToolName').textContent = tool.name;

    // 更新工具描述
    document.getElementById('toolTitle').textContent = tool.name;
    document.getElementById('toolDesc').textContent = tool.description;

    // 更新功能特点
    document.getElementById('toolFeatures').innerHTML = tool.features.map(f =>
        `<span class="feature-tag">${f}</span>`
    ).join('');

    // 更新适用场景
    document.getElementById('toolUseCases').innerHTML = tool.useCases.map(u =>
        `<span class="usecase-tag">${u}</span>`
    ).join('');

    // 更新参数表
    document.getElementById('paramTableBody').innerHTML = tool.params.map(param => `
        <tr>
            <td><code>${param.name}</code></td>
            <td><code>${param.type}</code></td>
            <td><span class="${param.required ? 'param-required' : 'param-optional'}">${param.required ? '必填' : '选填'}</span></td>
            <td>${param.desc}</td>
        </tr>
    `).join('');

    // 更新代码示例和响应示例
    updateCodeExamples();

    // 更新测试表单
    renderTestForm();
}

// 更新代码示例
function updateCodeExamples() {
    const codeEl = document.getElementById('codeExample');
    const responseEl = document.getElementById('responseExample');

    const codeExample = generateCodeExample(currentTool, currentLang);
    const responseExample = generateResponseExample(currentTool);

    codeEl.innerHTML = highlightCode(codeExample, currentLang);
    responseEl.innerHTML = highlightCode(responseExample, 'json');
}

// 生成代码示例
function generateCodeExample(tool, lang) {
    const { endpoint, params, description } = tool;

    switch (lang) {
        case 'python':
            return `import requests
import json

# ${description}
url = "https://api.example.com${endpoint}"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}

data = {
${params.map(p => `    "${p.name}": ${p.required ? generateSampleValue(p.type) : 'null  # ' + p.desc}`).join(',\n')}
}

response = requests.post(url, headers=headers, json=data, timeout=30)
result = response.json()

if response.status_code == 200:
    print("调用成功:", result)
else:
    print("调用失败:", response.status_code, result)`;

        case 'curl':
            return `# ${description}
curl -X POST \\
  "https://api.example.com${endpoint}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
${params.map(p => `    "${p.name}": ${p.required ? generateSampleValue(p.type) : 'null'}`).join(',\n')}
  }'`;

        case 'nodejs':
            return `// ${description}
const axios = require('axios');

const url = "https://api.example.com${endpoint}";
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_API_KEY"
};

const data = {
${params.map(p => `  "${p.name}": ${p.required ? generateSampleValue(p.type) : 'null  // ' + p.desc}`).join(',\n')}
};

axios.post(url, data, { headers, timeout: 30000 })
  .then(response => {
    console.log("调用成功:", response.data);
  })
  .catch(error => {
    console.error("调用失败:", error.response?.data || error.message);
  });`;

        default:
            return '';
    }
}

// 生成示例值
function generateSampleValue(type) {
    switch (type) {
        case 'string':
            return '"示例文本"';
        case 'integer':
            return '10';
        case 'array':
            return '["item1", "item2"]';
        case 'object':
            return '{}';
        default:
            return 'null';
    }
}

// 生成响应示例
function generateResponseExample(tool) {
    return `{
  "code": 200,
  "message": "success",
  "data": {
    "tool": "${tool.name}",
    "result": {
${generateToolSpecificResult(tool)}
    },
    "meta": {
      "processing_time": 0.123,
      "timestamp": "${new Date().toISOString()}"
    }
  }
}`;
}

// 生成工具特定结果
function generateToolSpecificResult(tool) {
    switch (tool.id) {
        case 'move-recognition':
            return `      "moves": [
        { "type": "背景", "text": "随着人工智能技术的快速发展..." },
        { "type": "目标", "text": "本文旨在提出一种新的..." },
        { "type": "方法", "text": "我们采用了深度学习方法..." }
      ]`;
        case 'auto-classification':
            return `      "category": "计算机科学",
      "confidence": 0.95,
      "categories": [
        { "name": "计算机科学", "score": 0.95 },
        { "name": "人工智能", "score": 0.88 }
      ]`;
        case 'keyword-recognition':
            return `      "keywords": [
        { "word": "深度学习", "score": 0.95 },
        { "word": "神经网络", "score": 0.87 },
        { "word": "自然语言处理", "score": 0.82 }
      ]`;
        default:
            return `      "items": [
        { "id": 1, "text": "示例结果1", "confidence": 0.95 },
        { "id": 2, "text": "示例结果2", "confidence": 0.87 }
      ]`;
    }
}

// 代码高亮
function highlightCode(code, lang) {
    let highlighted = code;

    // JSON高亮
    if (lang === 'json') {
        highlighted = highlighted
            .replace(/"([^"]+)":/g, '<span class="property">"$1":</span>')
            .replace(/:\s*"([^"]+)"/g, ': <span class="string">"$1"</span>')
            .replace(/:\s*(\d+\.?\d*)/g, ': <span class="number">$1</span>')
            .replace(/:\s*(true|false|null)/g, ': <span class="keyword">$1</span>');
    }

    // Python高亮
    if (lang === 'python') {
        highlighted = highlighted
            .replace(/(import|from|if|else|elif|for|while|def|class|return|print|in|not|and|or)/g, '<span class="keyword">$1</span>')
            .replace(/"([^"]+)"/g, '<span class="string">"$1"</span>')
            .replace(/#(.*)$/gm, '<span class="comment">#$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    }

    // JavaScript/Node.js高亮
    if (lang === 'nodejs') {
        highlighted = highlighted
            .replace(/(const|let|var|function|return|if|else|for|while|class|import|require|export|new|this|try|catch)/g, '<span class="keyword">$1</span>')
            .replace(/"([^"]+)"/g, '<span class="string">"$1"</span>')
            .replace(/\/\/(.*)$/gm, '<span class="comment">//$1</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    }

    return highlighted;
}

// 渲染测试表单
function renderTestForm() {
    const formContainer = document.getElementById('testForm');
    if (!formContainer) return;

    formContainer.innerHTML = `
        <div class="test-form">
            ${currentTool.params.map(param => generateFormField(param)).join('')}
        </div>
    `;
}

// 生成表单字段
function generateFormField(param) {
    const { name, type, required, desc } = param;

    if (type === 'array' && name === 'documents') {
        return `
            <div class="form-group">
                <label>${name}${required ? '<span class="required-mark">*</span>' : ''}</label>
                <textarea id="test_${name}" placeholder='[{"id": "1", "text": "示例文本1"}, {"id": "2", "text": "示例文本2"}]' data-type="json"></textarea>
                <div class="form-help">${desc}</div>
            </div>
        `;
    }

    if (type === 'object' && name === 'clusters') {
        return `
            <div class="form-group">
                <label>${name}${required ? '<span class="required-mark">*</span>' : ''}</label>
                <textarea id="test_${name}" placeholder='{"cluster_0": {"documents": [{"id": "1", "text": "示例文本"}]}}' data-type="json"></textarea>
                <div class="form-help">${desc}</div>
            </div>
        `;
    }

    if (type === 'text' || type === 'string') {
        const isLongText = name === 'text' || name === 'citation_text';
        return `
            <div class="form-group">
                <label>${name}${required ? '<span class="required-mark">*</span>' : ''}</label>
                ${isLongText
                    ? `<textarea id="test_${name}" placeholder="请输入${desc.split('，')[0]}" data-type="string">${getDefaultValue(name)}</textarea>`
                    : `<input type="text" id="test_${name}" placeholder="${desc.split('，')[0]}" data-type="string" value="${getDefaultValue(name)}">`}
                <div class="form-help">${desc}</div>
            </div>
        `;
    }

    if (type === 'integer') {
        return `
            <div class="form-group">
                <label>${name}${required ? '<span class="required-mark">*</span>' : ''}</label>
                <input type="number" id="test_${name}" placeholder="请输入数字" data-type="integer" value="${getDefaultValue(name)}">
                <div class="form-help">${desc}</div>
            </div>
        `;
    }

    if (name === 'language') {
        return `
            <div class="form-group">
                <label>${name}</label>
                <select id="test_${name}" data-type="select">
                    <option value="zh">zh - 中文</option>
                    <option value="en">en - English</option>
                </select>
                <div class="form-help">${desc}</div>
            </div>
        `;
    }

    if (name === 'type') {
        const options = getTypeOptions(currentTool.id, name);
        return `
            <div class="form-group">
                <label>${name}</label>
                <select id="test_${name}" data-type="select">
                    ${options.map(opt => `<option value="${opt.value}" ${opt.default ? 'selected' : ''}>${opt.label}</option>`).join('')}
                </select>
                <div class="form-help">${desc}</div>
            </div>
        `;
    }

    return '';
}

// 获取类型选项
function getTypeOptions(toolId, paramName) {
    if (paramName === 'type') {
        switch (toolId) {
            case 'move-recognition':
                return [
                    { value: 'abstract', label: 'abstract - 摘要', default: true },
                    { value: 'grant', label: 'grant - 基金项目' }
                ];
            case 'keyword-recognition':
                return [
                    { value: 'keyword', label: 'keyword - 关键词识别', default: true },
                    { value: 'research-question', label: 'research-question - 研究问题识别' }
                ];
            case 'ner-recognition':
                return [
                    { value: 'general', label: 'general - 通用实体识别', default: true },
                    { value: 'research', label: 'research - 科研实体识别' },
                    { value: 'domain', label: 'domain - 专业领域实体识别' }
                ];
            case 'deep-clustering':
                return [
                    { value: 'kmeans', label: 'kmeans - K均值聚类', default: true },
                    { value: 'hierarchical', label: 'hierarchical - 层次聚类' },
                    { value: 'dbscan', label: 'dbscan - DBSCAN聚类' }
                ];
            case 'auto-review':
                return [
                    { value: 'detailed', label: 'detailed - 详细结构', default: true },
                    { value: 'simple', label: 'simple - 简单结构' }
                ];
            default:
                return [{ value: 'default', label: '默认选项', default: true }];
        }
    }

    if (paramName === 'mode') {
        return [
            { value: 'both', label: 'both - 同时识别', default: true },
            { value: 'sentiment', label: 'sentiment - 仅情感识别' },
            { value: 'intent', label: 'intent - 仅意图识别' }
        ];
    }

    return [{ value: 'default', label: '默认选项', default: true }];
}

// 获取默认值
function getDefaultValue(paramName) {
    const defaults = {
        language: 'zh',
        type: 'abstract',
        mode: 'both',
        top_k: 10,
        n_clusters: 3,
        num_labels: 3,
        max_sections: 20,
        method: 'kmeans',
        structure: 'detailed',
        text: '随着人工智能技术的快速发展，自然语言处理领域取得了显著进展。本文旨在提出一种新的语义表示学习方法，提高文本理解能力。',
        citation_text: '正如Smith等人(2020)所指出的，这种方法在处理大规模文本数据时表现出色。'
    };

    return defaults[paramName] || '';
}

// 执行测试
async function executeTest() {
    const testBtn = document.getElementById('executeBtn');
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    const testResult = document.getElementById('testResult');

    // 更新状态
    testBtn.disabled = true;
    statusIndicator.classList.remove('error');
    statusIndicator.classList.add('loading');
    statusText.textContent = '请求中...';
    testResult.textContent = '发送请求到 API...';

    try {
        // 收集表单数据
        const data = {};
        for (const param of currentTool.params) {
            const input = document.getElementById(`test_${param.name}`);
            if (!input) continue;

            const value = input.value.trim();
            const dataType = input.dataset.type;

            if (param.required && !value) {
                throw new Error(`参数 ${param.name} 不能为空`);
            }

            if (dataType === 'json' && value) {
                try {
                    data[param.name] = JSON.parse(value);
                } catch (e) {
                    throw new Error(`参数 ${param.name} 的 JSON 格式不正确`);
                }
            } else if (dataType === 'integer' && value) {
                data[param.name] = parseInt(value, 10);
            } else if (value) {
                data[param.name] = value;
            }
        }

        // 发送 API 请求
        const response = await fetch(`http://localhost:3000${currentTool.endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            signal: AbortSignal.timeout(30000) // 30秒超时
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();

        // 显示结果
        testResult.innerHTML = highlightCode(JSON.stringify(result, null, 2), 'json');

        // 更新状态
        statusIndicator.classList.remove('loading');
        statusIndicator.classList.remove('error');
        statusText.textContent = '成功';
        testBtn.disabled = false;

    } catch (error) {
        // 显示错误
        testResult.textContent = `错误: ${error.message}\n\n请检查:\n1. 后端服务是否启动 (npm start)\n2. API 地址是否正确 (http://localhost:3000)\n3. 请求参数格式是否正确`;

        // 更新状态
        statusIndicator.classList.remove('loading');
        statusIndicator.classList.add('error');
        statusText.textContent = '失败';
        testBtn.disabled = false;
    }
}

// 绑定事件
function bindEvents() {
    // 侧边栏工具点击
    document.getElementById('toolNav').addEventListener('click', (e) => {
        const item = e.target.closest('.tool-item');
        if (item) {
            selectTool(item.dataset.id);
        }
    });

    // 语言标签切换
    document.getElementById('langTabs').addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            currentLang = e.target.dataset.lang;
            updateCodeExamples();
        }
    });

    // 复制按钮
    document.getElementById('copyBtn').addEventListener('click', () => {
        const code = document.getElementById('codeExample').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const btn = document.getElementById('copyBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5L5.5 12.5M5.5 4.5L13.5 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> 已复制';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        });
    });

    // 测试按钮 - 滚动到测试面板
    document.getElementById('testBtn').addEventListener('click', () => {
        const testPanel = document.getElementById('testPanel');
        testPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // 执行测试按钮
    document.getElementById('executeBtn').addEventListener('click', executeTest);

    // 清除结果按钮
    document.getElementById('clearOutputBtn').addEventListener('click', () => {
        document.getElementById('testResult').textContent = '等待测试执行...';
        document.getElementById('statusIndicator').classList.remove('error', 'loading');
        document.getElementById('statusText').textContent = '就绪';
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
