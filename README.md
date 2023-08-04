# task_scheduler_react
Consultas de bases de datos o consumo de procesos almacenados


#### Saliuda:
![Captura](https://github.com/wlopera/process_db_react/assets/7141537/0560bdee-ca32-455e-b94d-991b698f6031)
![driver-Captura](https://github.com/wlopera/process_db_react/assets/7141537/848d14fc-49db-467c-9408-5c2f949b14de)
![reault-Captura](https://github.com/wlopera/process_db_react/assets/7141537/81a55b5c-fd10-4820-a7ec-a822897c3826)

### Manejo y mensajes de error:
```
import axios from "axios";

const { BACKEND_URL } = window["runConfig"];

const instance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// Función para configurar el token en el encabezado
const setAuthToken = (token) => {
  console.log("set-token-agregado:", token);
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

// Permite controlar mensajes de respuesta de los servicios (mensajes exitosos o con error)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Error grave:", error.response);
    return {
      data: {
        code: error.code === "ERR_BAD_RESPONSE" ? 500 : 400,
        messageCode: error.code,
        message: error.message,
      },
    };
  }
);

export { instance as default, setAuthToken };

```

### Mensajes de error:
 * Consulta erronea (BD inexistente):
   
![Captura](https://github.com/wlopera/process_db_react/assets/7141537/d386f926-4bab-496e-973f-36eaa044c3ef)   

* Error 500 del backend
  
![500-Captura](https://github.com/wlopera/process_db_react/assets/7141537/ddc96909-7bb6-4677-8a72-1bbc2e05f9e7)

* BD caida:

![db-caida-Captura](https://github.com/wlopera/process_db_react/assets/7141537/ea8147e4-2dc3-466f-983d-2e2100ef3f6f)


### Demo:
https://cute-kulfi-b4cf4e.netlify.xyz



