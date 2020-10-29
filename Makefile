install:
	npm install

link:
	sudo npm link

test:
	npm run test

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js