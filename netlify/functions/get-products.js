exports.handler = async function(event, context) {
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxPDm_FYfD-Ududwzm89yRP0oI8KcxEy5mPAcSwI0_e5_Cj1yUDco5GYZ765VXAs2l6xsJHJEO4I9h/pub?output=csv';
    
    try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
        
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/csv'
            },
            body: csvText
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
