<?php

namespace Project;

use ProjectTag\ProjectTag;

class Project
{
    public $PID;
    public $NAME;
    public $Thumbnail;
    public $Download;
    public $RepoLink;
    public $OtherLinks;
    public $Visibility;
    public $Description;
    public $ProjectTags = array();
    public $Contributor = array();

    public function __construct($PID, $NAME, $Thumbnail, $Download, $RepoLink, $OtherLinks, $Visibility, $Description, $ProjectTags, $Contributor)
    {
        $this->PID = $PID;
        $this->NAME = $NAME;
        $this->Thumbnail = $Thumbnail;
        $this->Download = $Download;
        $this->RepoLink = $RepoLink;
        $this->OtherLinks = $OtherLinks;
        $this->Visibility = $Visibility;
        $this->Description = $Description;

        foreach ($ProjectTags as $tag_data) {
            $this->ProjectTags[] = new ProjectTag($tag_data["TID"], $tag_data["Tag"]);
        }

        $this->Contributor = $Contributor;
    }
}
