/**
 * WELCOME,
 *
 * For the purposes of this site, I only needed a few javascript enabled elements. For
 * ease of development I only created what I needed. So here we only have the vue components
 * to render the employment listings. Enjoy, Vincent
 */

const vcProject = {
  name: 'vc-project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  template: `<div>
    <h3>{{project.name}}</h3>
    <p>{{project.description}}</p>
    <span style="margin-right: var(--padding-3x); border-radius: 6px; background: var(--dark); color: var(--light); padding: var(--padding);" v-for="tag in project.tags" :key="tag">{{tag}}</span>
  </div>`
}

const vcEmployer = {
  name: 'vc-employer',
  components: {
    vcProject
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  template: `<div>
    <h2>{{job.company}} | <small>{{job.title}}</small></h2>
    <p>{{job.description}}</p>
    <vc-project
      v-for="project in job.projects"
      :key="project.name"
      :project="project" />
  </div>`
}

const vcResume = {
  name: 'vc-resume',
  components: {
    vcEmployer,
  },
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  template: `<div>
    <vc-employer
      v-for="job in jobs"
      :key="job.end"
      :job="job"
      />
  </div>`
}

setTimeout(() => {
  new Vue({
    components: {
      vcResume
    },
    data: () => {
      return {
        jobs: undefined
      }
    },
    mounted() {
      NProgress.start()
      setTimeout(async () => {
        // made a delay because who doesn't like to see a progress bar?
        const response = await fetch('/js/employers.json')
        this.jobs = await response.json()
        NProgress.done()
      }, 750)
    },
    computed: {
      filteredJobs() {
        if (!query) {
          return this.jobs
        }
        return this.jobs // to be filtered
      }
    },
    template: '<vc-resume v-if="jobs" :jobs="jobs" />'
  }).$mount('#employment')  
}, 0)
