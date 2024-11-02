import axios from 'axios'

interface ClimateData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        tension: number;
    }[];
}


export const fetchClimateData = async (): Promise<ClimateData> =>  {
    try {
        const reponse = await axios.get(
            'https://api.open-meteo.com/v1/forecast?latitude=-23.4772271&longitude=-47.5492724&past_days=2&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
        );

        const { hourly } = reponse.data;

        return{
            labels: hourly.time.map((time: string) => new Date(time).toLocaleString()),
            datasets: [
                {
                    label: 'Velocidade do Vento (m/s)',
                    data: hourly.wind_speed_10m,
                    borderColor: 'black',
                    backgroundColor: 'lightgray',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Temperatura (ºC)',
                    data: hourly.temperature_2m,
                    borderColor: 'black',
                    backgroundColor: 'darkgray',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Umidade Relativa (%)',
                    data: hourly.relative_humidity_2m,
                    borderColor: 'black',
                    backgroundColor: 'gray',
                    fill: true,
                    tension: 0.4
                },
            ],
        };


    }catch (error) {
        console.error('Erro ao buscar os dados: ', error);
        throw error;
    }
};