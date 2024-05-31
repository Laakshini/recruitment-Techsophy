import { ADD_JOBS, GET_JOBS, GET_JOB_BY_ID } from "../constants/endpoints";
import { request } from "./Request";

export const getAllJobs = async (): Promise<{ success: boolean; data?: any; message?: string }> => {
    const r: any = await request.get(
        `${process.env.REACT_APP_API_GATEWAY_URL}${GET_JOBS}`
      );
  
    if (r.status) {
      const form = r.data;
      console.log(form);
      return { success: r.status, data: form, message: r.message };
    }
  
    return { success: false };
};

export const getJobById = async (id:string): Promise<{ success: boolean; data?: any; message?: string }> => {
    const r: any = await request.get(
        `${process.env.REACT_APP_API_GATEWAY_URL}${GET_JOB_BY_ID}?jobId=${id}`
      );
    if (r.status) {
      const form = r.data;
      console.log(form);
      return { success: r.status, data: form, message: r.message };
    }
  
    return { success: false };
}; 

export const createJob = async (body:any): Promise<{ success: boolean; data?: any; message?: string }> => {
  const r: any = await request.post(
      `${process.env.REACT_APP_API_GATEWAY_URL}${ADD_JOBS}`,
      body
    );
  if (r.status) {
    const form = r.data;
    console.log(form);
    return { success: r.status, data: form, message: r.message };
  }

  return { success: false };
}; 