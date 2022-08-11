const cron = require('node-cron');

const blacklistService = require('../services/blacklistService');

async function blacklistScheduler() {
    cron.schedule('0 0 * * *', async () => {
        await blacklistService.clearExpiredTokens();
    });
}

module.exports = blacklistScheduler;