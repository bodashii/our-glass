const { Schema, model } = require('mongoose');
const dateFormat = require('..src/utils/date-format');
const encouragementSchema = require('./Encouragement')

const tickerSchema = new Schema({
    title: {
        type: 'string',
        required: 'You must include a title for this Ticker!',
        minLength: 1,
        maxLength: 150
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get : timestamp => dateFormat(timestamp)
    },
    endDate: {
        type: Date,
        required: 'You must include a end date for this Ticker'
    },
    username: {
        type: 'string',
        required:true
    },
    encouragements: [encouragementSchema]
},
{
    toJson: {
        getters: true
    }
})

tickerSchema.virtual('encouragementCount').get(function () {
    return this.encouragements.length
})

const Ticker = model('Thought', tickerSchema);

module.exports = Ticker