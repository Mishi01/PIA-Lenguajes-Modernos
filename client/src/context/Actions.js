export const LoginStart = (Credenciales)=>({
    type: "LOGIN_START"
});

export const LoginExitoso = (usuario)=>({
    type:"LOGIN_EXITOSO",
    payload:usuario,
});

export const LoginFallido = ()=>({
    type:"LOGIN_FALLIDO"
});

export const LogOut = ()=>({
    type:"LOGOUT"
});