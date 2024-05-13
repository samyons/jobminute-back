module.exports = (policyContext, config, { strapi }) => {
    if (policyContext.state.user) {
        policyContext.request.body.data.job_seeker = policyContext.state.user.job_seeker.id;
     // if a session is open
      // go to next policy or reach the controller's action
      return true;
    }
  
    return false; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
  };