var opts = {
  cuda: "9.0",
  os: "linux",
  pm: "conda",
  python: "3.6"
};

var os = $(".os > .option");
var package = $(".package > .option");
var python = $(".python > .option");
var cuda = $(".cuda > .option");

os.on("click", function() {
  selectedOption(os, this, "os");
});
package.on("click", function() {
  selectedOption(package, this, "pm");
});
python.on("click", function() {
  selectedOption(python, this, "python");
});
cuda.on("click", function() {
  selectedOption(cuda, this, "cuda");
});

function selectedOption(option, selection, category) {
  $(option).removeClass("selected");
  $(selection).addClass("selected");
  opts[category] = selection.id;
  commandMessage(buildMatcher());
}

function buildMatcher() {
  return (
    opts.pm.toLowerCase() +
    "," +
    opts.os.toLowerCase() +
    "," +
    opts.cuda.toLowerCase() +
    "," +
    opts.python.toLowerCase()
  );
}

function commandMessage(key) {
  var object = {
    "conda,linux,cuda8,python2.7":
      "conda install pytorch torchvision cuda80 -c pytorch",

    "conda,linux,cuda9.0,python2.7":
      "conda install pytorch torchvision -c pytorch",

    "conda,linux,cuda9.2,python2.7":
      "conda install pytorch torchvision cuda92 -c pytorch",

    "conda,linux,cudanone,python2.7":
      "conda install pytorch-cpu torchvision-cpu -c pytorch",

    "conda,linux,cuda8,python3.5":
      "conda install pytorch torchvision cuda80 -c pytorch",

    "conda,linux,cuda9.0,python3.5":
      "conda install pytorch torchvision -c pytorch",

    "conda,linux,cuda9.2,python3.5":
      "conda install pytorch torchvision cuda92 -c pytorch",

    "conda,linux,cudanone,python3.5":
      "conda install pytorch-cpu torchvision-cpu -c pytorch",

    "conda,linux,cuda8,python3.6":
      "conda install pytorch torchvision cuda80 -c pytorch",

    "conda,linux,cuda9.0,python3.6":
      "conda install pytorch torchvision -c pytorch",

    "conda,linux,cuda9.2,python3.6":
      "conda install pytorch torchvision cuda92 -c pytorch",

    "conda,linux,cudanone,python3.6":
      "conda install pytorch-cpu torchvision-cpu -c pytorch",

    "conda,linux,cuda8,python3.7":
      "conda install pytorch torchvision cuda80 -c pytorch",

    "conda,linux,cuda9.0,python3.7":
      "conda install pytorch torchvision -c pytorch",

    "conda,linux,cuda9.2,python3.7":
      "conda install pytorch torchvision cuda92 -c pytorch",

    "conda,linux,cudanone,python3.7":
      "conda install pytorch-cpu torchvision-cpu -c pytorch",

    "conda,macos,cuda8,python2.7":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.0,python2.7":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.2,python2.7":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cudanone,python2.7":
      "conda install pytorch torchvision -c pytorch",

    "conda,macos,cuda8,python3.5":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.0,python3.5":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.2,python3.5":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cudanone,python3.5":
      "conda install pytorch torchvision -c pytorch",

    "conda,macos,cuda8,python3.6":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.0,python3.6":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.2,python3.6":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cudanone,python3.6":
      "conda install pytorch torchvision -c pytorch",

    "conda,macos,cuda8,python3.7":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.0,python3.7":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cuda9.2,python3.7":
      "conda install pytorch torchvision -c pytorch <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "conda,macos,cudanone,python3.7":
      "conda install pytorch torchvision -c pytorch",

    "conda,windows,cuda8,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "conda,windows,cuda9.0,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "conda,windows,cuda9.2,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "conda,windows,cudanone,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "conda,windows,cuda8,python3.5":
      "conda install pytorch cuda80 -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda9.0,python3.5":
      "conda install pytorch -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda9.2,python3.5":
      "conda install pytorch cuda92 -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cudanone,python3.5":
      "conda install pytorch-cpu -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda8,python3.6":
      "conda install pytorch cuda80 -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda9.0,python3.6":
      "conda install pytorch -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda9.2,python3.6":
      "conda install pytorch cuda92 -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cudanone,python3.6":
      "conda install pytorch-cpu -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda8,python3.7":
      "conda install pytorch cuda80 -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda9.0,python3.7":
      "conda install pytorch -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cuda9.2,python3.7":
      "conda install pytorch cuda92 -c pytorch <br /> pip3 install torchvision",

    "conda,windows,cudanone,python3.7":
      "conda install pytorch-cpu -c pytorch <br /> pip3 install torchvision",

    "pip,macos,cuda8,python2.7":
      "pip install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.0,python2.7":
      "pip install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.2,python2.7":
      "pip install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cudanone,python2.7": "pip install torch torchvision",

    "pip,macos,cuda8,python3.5":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.0,python3.5":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.2,python3.5":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cudanone,python3.5": "pip3 install torch torchvision",

    "pip,macos,cuda8,python3.6":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.0,python3.6":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.2,python3.6":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cudanone,python3.6": "pip3 install torch torchvision",

    "pip,macos,cuda8,python3.7":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.0,python3.7":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cuda9.2,python3.7":
      "pip3 install torch torchvision <br /> # MacOS Binaries dont support CUDA, install from source if CUDA is needed",

    "pip,macos,cudanone,python3.7": "pip3 install torch torchvision",

    "pip,linux,cudanone,python2.7":
      "pip install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp27-cp27mu-linux_x86_64.whl <br/> pip install torchvision <br/><br/> # if the above command does not work, then you have python 2.7 UCS2, use this command <br/> pip install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp27-cp27m-linux_x86_64.whl",

    "pip,linux,cuda8,python2.7":
      "pip install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp27-cp27mu-linux_x86_64.whl <br/> pip install torchvision <br/><br/> # if the above command does not work, then you have python 2.7 UCS2, use this command <br/> pip install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp27-cp27m-linux_x86_64.whl",

    "pip,linux,cuda9.0,python2.7": "pip install torch torchvision",

    "pip,linux,cuda9.2,python2.7":
      "pip install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp27-cp27mu-linux_x86_64.whl <br/> pip install torchvision <br/><br/> # if the above command does not work, then you have python 2.7 UCS2, use this command <br/> pip install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp27-cp27m-linux_x86_64.whl",

    "pip,linux,cudanone,python3.5":
      "pip3 install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp35-cp35m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cuda8,python3.5":
      "pip3 install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp35-cp35m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cuda9.0,python3.5": "pip3 install torch torchvision",

    "pip,linux,cuda9.2,python3.5":
      "pip3 install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp35-cp35m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cudanone,python3.6":
      "pip3 install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp36-cp36m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cuda8,python3.6":
      "pip3 install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp36-cp36m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cuda9.0,python3.6": "pip3 install torch torchvision",

    "pip,linux,cuda9.2,python3.6":
      "pip3 install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp36-cp36m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cudanone,python3.7":
      "pip3 install http://download.pytorch.org/whl/cpu/torch-0.4.1.post2-cp37-cp37m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cuda8,python3.7":
      "pip3 install http://download.pytorch.org/whl/cu80/torch-0.4.1.post2-cp37-cp37m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,linux,cuda9.0,python3.7": "pip3 install torch torchvision",

    "pip,linux,cuda9.2,python3.7":
      "pip3 install http://download.pytorch.org/whl/cu92/torch-0.4.1.post2-cp37-cp37m-linux_x86_64.whl <br/> pip3 install torchvision",

    "pip,windows,cudanone,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "pip,windows,cuda8,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "pip,windows,cuda9.0,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "pip,windows,cuda9.2,python2.7":
      "# PyTorch does not support Python 2.7 on Windows. Please install with Python 3.",

    "pip,windows,cudanone,python3.5":
      "pip3 install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp35-cp35m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda8,python3.5":
      "pip3 install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp35-cp35m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda9.0,python3.5":
      "pip3 install http://download.pytorch.org/whl/cu90/torch-0.4.1-cp35-cp35m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda9.2,python3.5":
      "pip3 install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp35-cp35m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cudanone,python3.6":
      "pip3 install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp36-cp36m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda8,python3.6":
      "pip3 install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp36-cp36m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda9.0,python3.6":
      "pip3 install http://download.pytorch.org/whl/cu90/torch-0.4.1-cp36-cp36m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda9.2,python3.6":
      "pip3 install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp36-cp36m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cudanone,python3.7":
      "pip3 install http://download.pytorch.org/whl/cpu/torch-0.4.1-cp37-cp37m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda8,python3.7":
      "pip3 install http://download.pytorch.org/whl/cu80/torch-0.4.1-cp37-cp37m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda9.0,python3.7":
      "pip3 install http://download.pytorch.org/whl/cu90/torch-0.4.1-cp37-cp37m-win_amd64.whl <br/> pip3 install torchvision",

    "pip,windows,cuda9.2,python3.7":
      "pip3 install http://download.pytorch.org/whl/cu92/torch-0.4.1-cp37-cp37m-win_amd64.whl <br/> pip3 install torchvision"
  };

  if (!object.hasOwnProperty(key)) {
    $("#command").html(
      "# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source"
    );
  } else {
    $("#command").html(object[key]);
  }
}

// Cloud Partners sub-menu toggle listeners
$("[data-toggle='cloud-dropdown']").on("click", function(e) {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $("[data-toggle='cloud-dropdown'].open").removeClass("open");
    $(this).addClass("open");
  }
});

