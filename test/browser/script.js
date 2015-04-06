mocha.setup('bdd');
mocha.checkLeaks();
mocha.run();

require('../Tab-test');
