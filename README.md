# 语义计算工具库 API 演示

一个完整的语义计算工具库 API 文档和测试平台，类似 ModelScope 的工具调用文档页面。

## 功能特点

- 📚 完整的工具文档展示
- 🔧 10个语义计算工具的API调用示例
- 💻 支持多种编程语言（Python、cURL、Node.js）
- 🧪 在线测试功能，可直接调用后端API
- 📝 详细的参数说明和响应示例

## 工具列表

1. 语步识别工具 - 识别科技文本中的结构性语步
2. 自动分类工具 - 科技文献自动分类
3. 关键词识别工具 - 关键词抽取和研究问题识别
4. 引用句识别工具 - 引用情感和意图识别
5. 概念定义句识别工具 - 识别定义句和概念对象
6. 命名实体识别工具 - 多领域实体识别
7. 实体关系识别工具 - 实体关系抽取
8. 深度聚类工具 - 文档语义聚类
9. 聚类标签生成工具 - 为聚类结果生成标签
10. 结构化自动综述工具 - 自动生成文献综述

## 快速开始

### 前置要求

- Node.js (v14 或更高版本)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动后端服务

```bash
npm start
```

服务将在 `http://localhost:3000` 启动。

### 访问前端页面

在浏览器中打开 `index.html` 文件，或使用以下命令：

```bash
start index.html
```

## 使用说明

### 查看工具文档

1. 点击左侧导航栏中的工具名称
2. 查看工具描述、功能特点和适用场景
3. 查看API调用示例（支持Python、cURL、Node.js三种语言）
4. 查看请求参数说明和响应示例

### 在线测试工具

1. 点击页面顶部的"在线测试"按钮
2. 在测试面板中填写请求参数
3. 点击"执行测试"按钮发送API请求
4. 在右侧查看响应结果

## 项目结构

```
原型/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js             # 前端逻辑
├── server.js          # 后端API服务
├── package.json       # 项目配置
└── README.md          # 项目说明
```

## API 端点

后端提供以下API端点：

- `POST /api/v1/move-recognition` - 语步识别
- `POST /api/v1/auto-classification` - 自动分类
- `POST /api/v1/keyword-recognition` - 关键词识别
- `POST /api/v1/citation-recognition` - 引用句识别
- `POST /api/v1/definition-recognition` - 定义句识别
- `POST /api/v1/ner-recognition` - 命名实体识别
- `POST /api/v1/relation-recognition` - 实体关系识别
- `POST /api/v1/deep-clustering` - 深度聚类
- `POST /api/v1/clustering-label` - 聚类标签生成
- `POST /api/v1/auto-review` - 自动综述

## 响应格式

所有API端点返回统一的响应格式：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "tool": "工具名称",
    "result": { ... },
    "meta": {
      "processing_time": 0.123,
      "timestamp": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

## 注意事项

1. **后端服务**：使用在线测试功能前，必须先启动后端服务（`npm start`）
2. **API地址**：默认为 `http://localhost:3000`，如需修改请编辑 `app.js` 文件中的 API 地址
3. **参数格式**：JSON格式的参数需要符合标准JSON语法
4. **超时设置**：API请求默认超时时间为30秒

## 开发说明

### 修改API地址

编辑 `app.js` 文件，找到 `executeTest()` 函数中的 API 地址：

```javascript
const response = await fetch(`http://localhost:3000${currentTool.endpoint}`, {
```

### 添加新工具

1. 在 `app.js` 的 `toolsData` 数组中添加新工具的定义
2. 在 `server.js` 中添加对应的API端点处理函数
3. 添加 `generateToolSpecificResult()` 函数中的结果生成逻辑

### 自定义样式

编辑 `styles.css` 文件，使用CSS变量自定义主题颜色：

```css
:root {
    --primary-color: #6366f1;
    --primary-hover: #4f46e5;
    /* ... 其他颜色变量 */
}
```

## 许可证

MIT License
