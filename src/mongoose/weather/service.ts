import {Edu_AU_VIC_WA_NT_Arrows} from "next/font/google";
import {WeatherInterface} from "./interface";
import WeatherModel from "./model";

export const storeDocument = async(doc: WeatherInterface): Promise<boolean> => {
    try{
        await WeatherModel.create(doc);
    }  catch(error){
        return false;
    }

    return true;
}

export const findByZip = async(zip: string) : Promise<Array<WeatherInterface> | null> => {
    try{
        return await WeatherModel.findOne({zip});
    } catch(error){
        console.log(error);
    }

    return [];
}

export const updateByZip = async(zip: string, newData: WeatherInterface): Promise<boolean> => {
    try{
        await WeatherModel.findOneAndUpdate({zip}, newData);
        return true;
    } catch(error) {
        console.log(error);
    }

    return false;
}

export const deleteByZip = async(zip: string): Promise<boolean> => {
    try{
        await WeatherModel.findOneAndDelete({zip});
        return true;
    } catch(error){
        console.log(error);
    }

    return false;
}
