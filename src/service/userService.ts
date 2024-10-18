
import { HttpResponse } from '../models/httpReponseModel';
import { userModel } from '../models/userModel';
import * as userRepository from '../repositories/userRepository';
import * as httpResponse from '../utils/http-helper';

export const getAllUserService = async (): Promise<HttpResponse> => {
    try {
        const result = await userRepository.getAllUserRepository();

        if (result.length === 0) {
            return httpResponse.noContent()
        };

        return httpResponse.ok(result);

    } catch (error) {
        throw error
    }
};

export const getUserByIdService = async (id: Number): Promise<HttpResponse> => {
    try {
        const result = await userRepository.getUserByIdRepository(id);

        if (result.length === 0) {
            return httpResponse.noContent()
        };

        return httpResponse.ok(result);

    } catch (error) {
        throw error
    }
};

export const createUserService = async (data: userModel): Promise<HttpResponse> => {
    try {
        if (Object.keys(data).length === 0) {
            return httpResponse.badRequest()
        };

        const result = await userRepository.createUserRepository(data);

        if (result.length === 0) {
            return httpResponse.noContent()
        };

        return httpResponse.ok(result);

    } catch (error) {
        throw error
    }
};

export const deleteUserByIdService = async (id: Number): Promise<HttpResponse> => {
    try {
      
        const result = await userRepository.deleteUserByIdRepository(id);

        if (result.length === 0) {
            return httpResponse.noContent()
        };

        return httpResponse.ok(result);

    } catch (error) {
        throw error
    }
};