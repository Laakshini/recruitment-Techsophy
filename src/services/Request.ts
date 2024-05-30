import wretch from "wretch";
import { ResponseChain } from "wretch/dist/resolver";
import CONSTANTS from "../constants/constants";

export interface ResponseProps {
  success?: boolean;
  data?: unknown;
  message?: string;
}

type ApiResponse = unknown;

const callAPI = async (w: ResponseChain): Promise<ApiResponse> => {
  return w
    .unauthorized((error: any) => {
      // sessionStorage.clear();
      console.log(error);
      return {
        success: false,
        message: "Please login...",
      };
    })
    .internalError((error) => {
      const { message } = JSON.parse(error.message);
      return {
        success: false,
        message: message,
      };
    })
    .json((response) => response)
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        message: "Error communicating with server",
      };
    });
};

const callBlobAPI = async (wr: ResponseChain): Promise<ApiResponse> => {
  return wr
    .unauthorized(() => {
      // sessionStorage.clear();
      return {
        success: false,
        message: "Please login again...",
      };
    })
    .blob((response) => {
      return { success: true, data: response };
    })
    .catch((_error) => {
      console.log(_error);
      return {
        success: false,
        message: "Error communicating with server",
      };
    });
};

export interface ResponseProps {
  success?: boolean;
  data?: unknown;
  message?: string;
}

export const request = {
  get: (url: string): Promise<ApiResponse> => {
    // console.log("get", sessionStorage.getItem(CONSTANTS.REACT_TOKEN))
    return callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        .headers({ "content-type": "application/json" })
        .get()
    );
  },
  getBlob: (url: string): Promise<ApiResponse> =>
    callBlobAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        // .headers({ 'content-type': 'application/json' })
        .get()
    ),

  post: (url: string, body: unknown): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        .post(body)
    ),
  put: (url: string, body: unknown): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        .put(body)
    ),
  delete: (url: string): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        .delete()
    ),
  postFormForToken: (
    url: string,
    params: any,
    controller?: AbortController
  ): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        // .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        .headers({ "content-type": "application/x-www-form-urlencoded" })
        .post(params)
    ),
  postForm: (
    url: string,
    params: any,
    controller?: AbortController
  ): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem(CONSTANTS.REACT_TOKEN)}`)
        .formData(params)
        .post()
    ),
};
