const _ = require('lodash');
function summarize(invoices) {
 for (const invoice of invoices) if (!Number.isFinite(invoice.amount) || invoice.amount < 0) throw new Error('invalid amount');
 return _.mapValues(_.groupBy(invoices, 'customer'), rows => _.sumBy(rows, 'amount'));
}
module.exports = {summarize};
if (require.main === module) console.log(JSON.stringify(summarize([{customer:'Ada',amount:10}])));
