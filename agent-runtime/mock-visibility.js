(() => {
  const nativeFetch = window.fetch.bind(window);
  let waitingForRealReply = false;
  let replyBaseline = { count: 0, content: '' };

  const isChatRequest = (input, init = {}) => {
    const url = typeof input === 'string' ? input : input?.url || '';
    const body = typeof init.body === 'string' ? init.body : '';
    const method = String(init.method || input?.method || 'GET').toUpperCase();
    return method === 'POST' && (/chat|response|message|agent/i.test(url) || /"(?:messages|input)"\s*:/.test(body));
  };

  const markReadyAfterRender = (attempt = 0) => {
    const replies = Array.from(document.querySelectorAll('.assistant-bubble'));
    const content = replies.at(-1)?.textContent?.trim() || '';
    const failed = /API (?:调用)?失败|API 暂时不可用|内容为空/.test(content);
    const replyChanged = replies.length > replyBaseline.count || content !== replyBaseline.content;
    if (waitingForRealReply && replyChanged && content && !failed) {
      document.documentElement.dataset.apiChatReady = 'true';
      waitingForRealReply = false;
      return;
    }
    if (attempt < 30) window.setTimeout(() => markReadyAfterRender(attempt + 1), 100);
  };

  window.fetch = async (...args) => {
    const chatRequest = isChatRequest(args[0], args[1]);
    if (chatRequest) {
      const replies = Array.from(document.querySelectorAll('.assistant-bubble'));
      replyBaseline = { count: replies.length, content: replies.at(-1)?.textContent?.trim() || '' };
    }
    const response = await nativeFetch(...args);
    if (chatRequest && response.ok) {
      waitingForRealReply = true;
      markReadyAfterRender();
    }
    return response;
  };
})();
