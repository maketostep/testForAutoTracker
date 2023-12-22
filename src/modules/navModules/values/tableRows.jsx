
export const rows = [];

export async function getRows() {
    return fetch("https://gps.autotracker.group/api/devices/?id=2&id=9&id=29", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ',
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                rows.push(response[i])
                // console.log(element)
            }
        })
}
await getRows()
