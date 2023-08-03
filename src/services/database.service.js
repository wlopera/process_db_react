import http from "./axios/http-common";

const PATH_API = "/mysql";

class DatabaseService {
  getQuery(data) {
    try {
      return http.post(`${PATH_API}/getTableByQuery`, data).then((response) => {
        console.log(123, response);
        if (response.data.code === 200) {
          if (response.data.data.length > 0) {
            return {
              ...response.data,
              alert: {
                type: "SUCCESS",
                text: `Consulta de tabla satisfactoria.`,
              },
            };
          } else {
            return {
              ...response.data,
              alert: {
                type: "SUCCESS",
                text: `No hay registros disponibles`,
              },
            };
          }
        } else {
          return {
            ...response.data,
            alert: {
              type: "ERROR",
              text: `Error cargando consultando tabla: [${response.data.code}]: ${response.data.message}`,
            },
          };
        }
      });
    } catch (error) {
      const errorMessage = error;
      return {
        data: response.data,
        message: {
          type: "ERROR",
          text: `Error consultando tabla: ${errorMessage}`,
        },
      };
    }
  }
}

export default new DatabaseService();
