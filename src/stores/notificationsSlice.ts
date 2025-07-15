import type { StateCreator } from "zustand";
import type { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
    text:string,
    error:boolean,
    show:boolean,
}
export type NotificationsSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text'| 'error'>) => void
    hideNotification: () => void
}

export const createNotificationsSlice: StateCreator<NotificationsSliceType & FavoritesSliceType, [], [],
    NotificationsSliceType> = (set, get) =>({
    notification: {
        text:'',
        error:false,
        show:false,
    },
    showNotification: (payload)=> {
        //muestro los datos de la notificacion y despes de 4s se esconde
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotification()
        }, 4000);
    },
    hideNotification: () => {
        //vuelvo a poner los parametros por default de la notificacion
        set({
            notification:{
                text: '',
                error: false,
                show: false
            }
        })
    }
})