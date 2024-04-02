import React from 'react';
import { Typography, Button, Box, Paper, TextField, Card } from '@mui/material'

function Dictionary() {
    const [word, setWord] = React.useState("");
    const [result, setResult] = React.useState({
        word: "",
        meaning: "",
        phonetic: "",
        partOfSpeech: ""
    });
    const [errorMessage, setErrorMessage] = React.useState("");
    const [fetchCompleted, setFetchCompleted] = React.useState(false);

    const handleFetch = () => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error;
                }
                setErrorMessage('');
                return res.json();
            })
            .then(data => {
                setFetchCompleted(true);
                setResult({
                    word: data[0].word,
                    meaning: data[0].meanings[0].definitions[0].definition || 'No result',
                    phonetic: data[0].phonetics[1].text || 'No result',
                    partOfSpeech: data[0].meanings[0].partOfSpeech || 'No result'
                });
            })
            .catch(error => {
                setErrorMessage(' Meaning not found ');
            });

    };



    return (
        <Paper sx={{ height: "100vh" }}>
            <Typography variant="h1">Dictionary app
            </Typography>
            <Box sx={{ pt: 5, mb: 3 }}>
                <TextField
                    id="word-search-input"
                    label="Enter word to seach..."
                    variant="outlined"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    sx={{ mr: 3 }}
                />

                <Button onClick={handleFetch} variant="outlined">Get word</Button>
            </Box>

            {fetchCompleted && errorMessage === '' && (
                <Card sx={{ border: "1px black solid", pt: 5, pb: 5, pl: 5, textAlign: "left" }}>
                    <Typography variant="body1">Word: {result.word} / [{result.partOfSpeech}]
                    </Typography>
                    <Typography variant="body1">Meaning: {result.meaning}
                    </Typography>
                    <Typography variant="body1">Phonetic: [{result.phonetic}]
                    </Typography>
                </Card>
            )}
            {errorMessage !== '' && (
                <Typography variant="body1">{errorMessage}
                </Typography>
            )}

        </Paper>
    );
}

export default Dictionary;