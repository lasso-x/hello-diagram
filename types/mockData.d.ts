declare const mockData: {
    entities: ({
        type: string;
        id: string;
        data: {
            cvr: string;
            name: string;
        };
    } | {
        type: string;
        id: string;
        data: {
            name: string;
            cvr?: undefined;
        };
    })[];
    relations: {
        type: string;
        from: string;
        to: string;
        data: {
            ownershipPercentage: string;
        };
    }[];
};
export default mockData;
