export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        // 修改下方的example.com为自己的节点ip/域名
        url.hostname="80-1a6740459ad742f8b9c3fe9937c47ea1.patr.cloud";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  };
