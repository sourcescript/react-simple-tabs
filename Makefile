NPM_BIN = ./node_modules/.bin
TEST_DIR = ./test
BROWSER_DIR = $(TEST_DIR)/browser

test:
	$(NPM_BIN)/webpack-dev-server 'mocha!$(BROWSER_DIR)/script.js' \
		--module-bind 'jsx=babel?modules=common' \
		--module-bind 'js=babel?modules=common' \
		--progress --colors \
		--content-base $(BROWSER_DIR) \
		--hot

	# open http://localhost:8080/webpack-dev-server/test
	open $(BROWSER_DIR)/index.html

.PHONY: test
