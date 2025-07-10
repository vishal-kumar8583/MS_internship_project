document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    const resultDiv = document.getElementById('predictionScore');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const hours = parseFloat(document.getElementById('hours').value);
        const previousScore = parseFloat(document.getElementById('previous_score').value);
        const sleepHours = parseFloat(document.getElementById('sleep_hours').value);
        const extracurricular = parseFloat(document.getElementById('extracurricular').value);

        // Add loading animation
        resultDiv.innerHTML = '<div class="loading">Calculating...</div>';

        // Simulate API call to your ML model (replace this with actual API call)
        setTimeout(() => {
            // This is a dummy calculation - replace with your actual prediction logic
            let predictedScore = (previousScore * 0.6) + (hours * 2) + (sleepHours * 0.5) - (extracurricular * 0.2);
            predictedScore = Math.min(100, Math.max(0, predictedScore)); // Ensure score is between 0 and 100

            // Display result with animation
            resultDiv.innerHTML = `
                <div class="score-animation">
                    <h3>Predicted Score:</h3>
                    <div class="score">${predictedScore.toFixed(2)}%</div>
                    <p class="prediction-message">${getPredictionMessage(predictedScore)}</p>
                </div>
            `;
        }, 1500);
    });

    function getPredictionMessage(score) {
        if (score >= 90) return "Excellent! Keep up the great work!";
        if (score >= 80) return "Very good performance!";
        if (score >= 70) return "Good performance, but there's room for improvement.";
        if (score >= 60) return "Average performance. Consider increasing study hours.";
        return "Need to focus more on studies and maintain a better schedule.";
    }
});

// Add some CSS animations
const style = document.createElement('style');
style.textContent = `
    .loading {
        padding: 20px;
        text-align: center;
        color: #666;
    }

    .score-animation {
        animation: fadeIn 0.5s ease-in;
    }

    .score {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin: 1rem 0;
    }

    .prediction-message {
        color: #666;
        font-style: italic;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);