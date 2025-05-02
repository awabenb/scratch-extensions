class OpenURLExtension {
    constructor() {
        this.runtime = null;
    }

    getInfo() {
        return {
            id: 'openurlextension',
            name: 'Web Tools',
            blocks: [
                {
                    opcode: 'openURL',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '打开网页 [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://scratch.mit.edu'
                        }
                    }
                }
            ]
        };
    }

    openURL(args) {
        const url = args.URL;
        try {
            // 使用window.open方法打开新窗口
            const newWindow = window.open(url, '_blank');
            if (!newWindow || newWindow.closed) {
                console.warn('弹出窗口可能被浏览器阻止');
            }
        } catch (error) {
            console.error('打开网址失败:', error);
        }
    }
}

// 注册扩展
Scratch.extensions.register(new OpenURLExtension());