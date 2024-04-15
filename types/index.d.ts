export { MyInterface };

declare global {
    interface Props {
        date?: string | null;
        view?: string;
        events?: Appointment[];
        loading?: boolean;
        config?: {
            actions?: {
                view?: {
                    enabled?: boolean;
                    icon?: boolean;
                    text?: string;
                };
                report?: {
                    enabled?: boolean;
                    icon?: boolean;
                    text?: string;
                };
            };
            searchPlaceHolder?: string;
            eventName?: string;
            closeText?: string;
        };
    }

// defaults
    {
        date: null;
        view: "";
        events: () => [];
        loading: false;
        config: () => ({
            actions: {
                view: {
                    enabled: true,
                    icon: true,
                    text: "",
                },
                report: {
                    enabled: true,
                    icon: true,
                    text: "",
                },
            },
            searchPlaceHolder: "",
            eventName: "",
            closeText: "",
        });
    }

    interface Appointment {
        date: string, //DateIsoString
        comment?: string,
        createdAt?: string, //DateIsoString
        id: string,
        updatedAt?: string, //DateIsoString
        keywords: string,
        name: string,
    }

    events: Appointment[];
}

// interface
