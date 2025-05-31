import Enumerable from "linq";

interface Booking{
    bookingId:number;
    location:string;
    buildingName:string;
    buildingId:number;
    startDate:Date;
    endDate:Date;
}

interface HotelBookings{
    accountId:string;
    bookings:Array<Booking>
}

// Mock Data
const mockData:HotelBookings[]=[
    {
        accountId:"001",
        bookings:[
            {
                bookingId: 1001,
                location: "New York",
                buildingName: "The Plaza",
                buildingId: 7773,
                startDate: new Date("2025-04-15"),
                endDate: new Date("2025-04-20"),
            },
            {
                bookingId: 1002,
                location: "London",
                buildingName: "The Savoy",
                buildingId: 987289,
                startDate: new Date("2025-06-01"),
                endDate: new Date("2025-06-07"),
            },
        ]
    },
    {
        accountId:"002",
        bookings:[
            {
                bookingId: 2002,
                location: "Tokyo",
                buildingName: "Park Hyatt",
                buildingId: 892798,
                startDate: new Date("2025-07-20"),
                endDate: new Date("2025-07-25"),
            },
            {
                bookingId: 2004,
                location: "Paris",
                buildingName: "Eiffel Tower Plaza",
                buildingId: 112,
                startDate: new Date("2025-03-20"),
                endDate: new Date("2025-03-23"),
            },
        ]
    }
]

const fetchBookings=(accountId:string)=>{
    const response=Enumerable.from(mockData)
                             .firstOrDefault(x=>x.accountId===accountId);
    if(!response)
        return {
            accountId,
            bookings: []
        }

    return response;    
}

export default fetchBookings;