import { checkJwtToken, createJwtToken } from "~~/jwt";

export default defineEventHandler(async (event)=>{
    const { token } = await readBody(event);
    
    const isValid = await checkJwtToken(token).then((data: any)=>{
        const cookie = getCookie(event, 'user') || "{}";
        const user = JSON.parse(cookie);
        const res = {
            user: user,
            success: data.success
        }
             
        return res;
    });

    if(isValid.success){
        //Refresh JWT token
        const token = await createJwtToken();

        setCookie(event, "token", token);
    }
    
    return isValid;
});