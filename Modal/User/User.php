<?php

namespace User;

class User
{
    public $UID;
    public $Username;
    public $email;
    public $github;
    public $Linkedid;
    public $Bio;
    public $Projects = array();

    public function __construct($UID, $Username, $email, $github, $Linkedid, $Bio, $Projects)
    {
        $this->UID = $UID;
        $this->Username = $Username;
        $this->email = $email;
        $this->github = $github;
        $this->Linkedid = $Linkedid;
        $this->Bio = $Bio;

        foreach ($Projects as $project_data) {
            $this->Projects[] = new \Project\Project(
                $project_data["PID"],
                $project_data["NAME"],
                $project_data["Thumbnail"],
                $project_data["Download"],
                $project_data["RepoLink"],
                $project_data["OtherLinks"],
                $project_data["Visibility"],
                $project_data["Description"],
                $project_data["ProjectTags"],
                $project_data["Contributor"]
            );
        }
    }
}
