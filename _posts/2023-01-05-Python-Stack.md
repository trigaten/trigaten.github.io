# Research-Grade Coding Practices

Here are my recommendations for how to write/organize code (targeted at Python).

- Here is me talking about CI and the rest of this for 30 minutes: [Code Practices Talk](https://www.youtube.com/watch?v=sw3v4Snopjc)

Here are my recommendations of things to do/use (roughly in order of importance):

- [CI/CD Pipeline](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/)
- [Make your repo a Python Package](https://packaging.python.org/)
- [Use Pytest in CI Pipeline](https://docs.pytest.org/en/7.4.x/)
- [Protect your Main Branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- Make people write tests for any new feature they introduce
- [Make people write documentation for all code they write](https://peps.python.org/pep-0008/). This can either be in the README.md or using smtg like [Sphinx](https://www.sphinx-doc.org/en/master/), which autobuilds a documentation website from your docs.
- Use [black](https://github.com/psf/black) and [flake8](https://flake8.pycqa.org/en/latest/).
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Use Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven_development%20(TDD),software%20against%20all%20test%20cases.)