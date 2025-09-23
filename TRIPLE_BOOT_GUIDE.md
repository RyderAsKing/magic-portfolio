# How to triple boot your PC with windows and any two linux OS of your choice

This guide serves as an example to triple booting your machine with 3 operating systems of your choice (Windows and two other).

I had always wanted to dual boot and it was really easy, however all the guides out there were incomplete on triple booting.

My original dual boot was Windows 11 and Arch Linux, which was fine but I also wanted to use Ubuntu. VM never gives me the raw power that I need so that wont work, that is when I decided to triple boot.

## Things to keep in mind

1. Windows uses NTFS, Linux uses EXT4, EFI system partitions use FAT32.

2. Windows cannot access EXT4, it will be literally invisible to windows, on the other hand Linux will be able to access NTFS by mounting a partition, do note that if fast boot or equivalent is enabled, this could lead to data loss.

3. If you are going install your linux system on an encrypted disk, you need to disable encryption

## Personal recommendations

1. Have atleast 500 GB for your main windows partition (windows, usually tends to use more space), 150 for the root partitions for either of your linux OS

2. Creating a shared disk which is NTFS, since you can easily access NTFS file over linux operating system this allows you to share files between windows and both the linux OS (do note that since it is NTFS and not EXT4, the operations will be quite slow)

3. Create partition where you will store bulk of your data in your linux partition (eg. 500 GB partition mounted at /mnt/data) exclusively for a single OS (linux)

4. If you plan to play games, the 3rd recommendation will be important to store game files without losing the track of the game files (if you dont permanently mount using FSTAB, and mount every boot manually, steam games will not work)

## ESP explained

A small, FAT32-formatted partition on a data storage device that is used by computers with UEFI firmware to boot operating systems and utilities. It stores essential bootloader programs, device drivers, and system utility files required to start the operating system.

If you can install the kernel and initramfs on the ESP then you do not need a bootloader

## Bootloader explained

A bootloader is a small, crucial program that executes when a device starts, responsible for initializing hardware and loading the operating system (OS) or firmware into memory.

## Bootmanager explained

A boot manager is a program that provides a menu of options at startup, allowing you to choose which operating system or bootloader to load. It scans your system's storage for available bootable items and presents them in a user-friendly interface. A boot manager's job is to manage the choices, not to perform the actual loading of the operating system itself. It simply passes control to the bootloader of your selected choice.

## Grub explained

A bootloader is a small, crucial program that executes when a device starts, responsible for initializing hardware and loading the operating system (OS) or firmware into memory.

## Kernel and Initramfs explained

A kernel is the central, core component of a computer's operating system (OS) that acts as a bridge between software and hardware, managing system resources like memory and CPU time, and facilitating communication between them.

An initramfs (initial RAM file system) is a temporary root file system loaded into memory by the bootloader, containing essential drivers and tools needed to mount the actual root file system and continue the boot process.

## Getting started for dual boot

1. Disable secure boot
2. Disable bitlocker encryption (windows)
3. Make sure to have unallocated space to install ubuntu into (you can use a new disk, format an existing partition or shrink an existing partition)
4. Burn the installation ISO into a USB stick (preferred)
5. Boot into the installation USB stick
6. Go through the installation steps till you are asked about the partition/disk, select manual
7. Create a root partition EXT4 (/, this is where your OS and its files stays)
8. Create an EFI System Partition and mount it at (/boot), this is where the bootloader files for your system stays.
9. Follow the installation steps and reboot, you should be able to select your linux installating along with your windows using UEFI boot menu

## rEFInd - A boot manager

rEFInd is a boot manager. Its primary function is to scan your computer's partitions and present a graphical menu of installed operating systems and UEFI applications. It is a menu-driven interface that makes it easy for you to choose what to boot. It does not perform the actual task of loading the operating system's kernel.

### The Key Difference

rEFInd manages: It finds and displays your options.

GRUB loads: It takes over and performs the action of loading the operating system.

In a multi-boot scenario, they can work together. For example, you can use rEFInd to show you a menu of options, including an entry for Ubuntu. When you select that entry, rEFInd can call upon the GRUB bootloader to handle the technical process of loading the Ubuntu kernel.

## Installing rEFInd

1. Boot into a Linux environment. Use a live Linux USB (like Ubuntu or Arch) to boot into a temporary system.

2. Download and extract rEFInd. Download the rEFInd binary zip file from the official website and extract it.

3. Identify and mount your EFI System Partition (ESP). Find your ESP (it's the FAT32 partition, usually /dev/sda1 or /dev/nvme0n1p1). Mount it to a location like /mnt.

4. Run the installation script. Navigate to the extracted rEFInd folder and run the installation script.

5. Ensure drivers are installed. The installation script often copies the most common drivers, but you should verify that drivers like ext4_x64.efi are in the /mnt/EFI/refind/drivers_x64 directory.

6. Remove the USB stick and reboot. Your computer's UEFI firmware should now automatically launch rEFInd, which will present you with a menu to select either your Linux or Windows installation.

## Installing the Third OS (Your Second Linux Distro)

1.  Just like before, you need to make room for your new OS. Boot into your primary Linux distro or use a live USB with a tool like GParted to shrink an existing partition and create new unallocated space.

2.  Create a bootable USB stick for your second Linux distribution (e.g., Fedora, Manjaro, etc.) and boot your computer from it.

3.  Proceed with the installation until you reach the partitioning screen. Again, select the "Manual" or "Something Else" option.

4.  Create a Root Partition: Find the unallocated space you created in Step 1. Create a new partition, format it as EXT4, and set its mount point to / (root).

5.  Use the Existing ESP: This is the most important part! Do not format or create a new EFI System Partition. Instead, find your existing ESP (the small FAT32 partition). Select it and assign it the mount point /boot/efi. Ensure the "format" checkbox for this partition is unchecked. All three of your operating systems will share this single ESP.

6.  The installer will ask where to install the GRUB bootloader. It's safest to install it onto the root partition you just created for this new Linux OS (e.g., /dev/sdaX or /dev/nvme0n1pX, where X is the new root partition). By doing this, you avoid overwriting rEFInd's primary boot files on the ESP. rEFInd is smart enough to find and boot the kernel directly from the new partition anyway.

7.  Finish the rest of the installation steps as prompted and then reboot your computer.

## The Final Result: The Triple Boot Menu

Once your computer reboots, remove the installation USB. You should be greeted by the rEFInd boot menu. Thanks to its auto-detection feature, rEFInd will have automatically scanned your drives and added an entry for your new Linux distribution alongside Windows and your first Linux OS.

You can now select any of the three operating systems to boot into. Congratulations, you have successfully triple-booted your machine!

---

## Need Help?

If you have any questions about this guide, feel free to contact me at [contact@ryder.pro](mailto:contact@ryder.pro), and I'll try to help you with it.
