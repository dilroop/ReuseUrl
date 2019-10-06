const displayUtils = {
    hide: "none",
    //Hidden only on xs
    xsHide: { xs: "none", sm: "block" },
    //Hidden only on sm
    smHide: { xs: "block", sm: "none", md: "block" },
    //Hidden only on md
    mdHide: { xs: "block", md: "none", lg: "block" },
    //Hidden only on lg
    lgHide: { xs: "block", lg: "none", xl: "block" },
    //Hidden only on xl
    xlHide: { xs: "block", xl: "none" },
    //Visible only on xs
    xsVisible: { xs: "block", sm: "none" },
    //Visible only on sm
    smVisible: { xs: "none", sm: "block", md: "none" },
    //Visible only on md
    mdVisible: { xs: "none", md: "block", lg: "none" },
    //Visible only on lg
    lgVisible: { xs: "none", lg: "block", xl: "none" },
    //Visible only on xl
    xlVisible: { xs: "none", xl: "block" },
    //Visible on and under small
    smDownVisible: { xs: "block", sm: "block", md: "none" },
    //Visible on and up medium
    mdUpVisible: { xs: "none", sm: "none", md: "block" }
};

export default displayUtils;
