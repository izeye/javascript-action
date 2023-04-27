const core = require('@actions/core');

try {
    // `script` input defined in action metadata file
    const script = core.getInput('script');
    console.log(`script: ${script}`);

    const evaluated = eval(script);
    console.log(`evaluated: ${evaluated}`);

    core.setOutput("stdout", evaluated);
} catch (error) {
    core.setFailed(error.message);
}
