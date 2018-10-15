require './common.iced'

# ==============================================================================
# tasks required for this build
Tasks "dotnet"  # dotnet functions
Tasks "publishing"

Install "child_process"
Install "process"

# ==============================================================================
# Settings
Import
  initialized: false
  solution: "#{basefolder}/autorest.typescript.sln"
  sourceFolder:  "#{basefolder}/src/"

# ==============================================================================
# Tasks

task 'init', "" ,(done)->
  Fail "YOU MUST HAVE NODEJS VERSION GREATER THAN 7.10.0" if semver.lt( process.versions.node , "7.10.0" )
  done()

task 'fetch_submodules',"", (done) ->
  execute "git submodule update --init --recursive", done

task 'install_common',"", (done) ->
  # global.verbose = true
  execute "npm install",{cwd:"#{basefolder}/autorest.common", silent:false }, done