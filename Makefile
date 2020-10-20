install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js