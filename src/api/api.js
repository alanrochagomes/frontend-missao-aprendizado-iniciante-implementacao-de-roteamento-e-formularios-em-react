export const Api = {
  baseUrl: "https://backend-iniciante-integrar-com-frontend-uyiz.onrender.com/",

  personagem: {
    endpoint: function () {
      return Api.baseUrl + "personagem";
    },
    readAll: function () {
      return this.endpoint() + "/";
    },
    create: function () {
      return this.endpoint() + "/";
    },
  },

  buildApiGetRequest: function (url) {
    return fetch(url, { method: "GET" }).catch(function (error) {
      console.error("Erro ao carregar dados: " + url, error);
      toast.error("Error ao carregar dados.");
    });
  },

  buildApiPostRequest: function (url, body) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .catch(function (error) {
      console.error("Erro ao enviar dados: " + url, error);
      toast.error("Error ao enviar dados.");
    });
  },
};
