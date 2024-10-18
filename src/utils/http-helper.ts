import { HttpResponse } from "../models/httpReponseModel"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "successful"
        }
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const notAuthorized = async (): Promise<HttpResponse> => {
    return {
        statusCode: 401,
        body: {
            message: 'Not authorized'
        }
    };
};

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const internalServerError = async (): Promise<HttpResponse> => {
    return {
        statusCode: 500,
        body: null
    }
}