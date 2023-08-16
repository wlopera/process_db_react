import http from "./axios/http-common";

class DatabaseService {
  getQuery(data) {
    try {
      return http
        .post(`${data["typeDB"]}/getTableByQuery`, data)
        .then((response) => {
          if (response.data.code === 200) {
            if (response.data.data.length > 0) {
              return {
                ...response.data,
                alert: {
                  type: "SUCCESS",
                  title: `Consulta de tabla satisfactoria.`,
                  text: `Consulta de tabla satisfactoria.`,
                },
              };
            } else {
              return {
                ...response.data,
                alert: {
                  type: "ERROR",
                  title: "No hay registros disponibles",
                  text: response.data.error,
                },
              };
            }
          } else {
            return {
              ...response.data,
              alert: {
                type: "ERROR",
                title: "Error cargando consulta de la tabla",
                text: response.data,
              },
            };
          }
        });
    } catch (error) {
      return {
        data: response.data,
        message: {
          type: "ERROR",
          title: "Error consultando tabla",
          text: error,
        },
      };
    }
  }

  getSP(data) {
    try {
      return http.post(`${data["typeDB"]}/callSP`, data).then((response) => {
        if (response.data.code === 200) {
          if (response.data.data.length > 0) {
            return {
              ...response.data,
              alert: {
                type: "SUCCESS",
                title: `Consulta de tabla satisfactoria.`,
                text: `Consulta de tabla satisfactoria.`,
              },
            };
          } else {
            return {
              ...response.data,
              alert: {
                type: "ERROR",
                title: "No hay registros disponibles",
                text: response.data.error,
              },
            };
          }
        } else {
          return {
            ...response.data,
            alert: {
              type: "ERROR",
              title: "Error cargando consulta de la tabla",
              text: response.data,
            },
          };
        }
      });
    } catch (error) {
      return {
        data: response.data,
        message: {
          type: "ERROR",
          title: "Error consultando tabla",
          text: error,
        },
      };
    }
  }
}

export default new DatabaseService();
